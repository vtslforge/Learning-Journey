import http, {
  type IncomingMessage,
  type ServerResponse,
} from "node:http";

const PORT = 3001;

// Defines the structure of a User object
type User = {
  id: number;
  name: string;
  email: string;
};

// Generic API response type
// T is a placeholder for whatever type the "data" will contain
type APIResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
};

// Temporary in-memory users data
const users: User[] = [
  { id: 1, name: "Aman", email: "aman@example.com" },
  { id: 2, name: "Rahul", email: "rahul@example.com" },
];

// Generic function for sending JSON responses
//
// T = type of the data being sent
// body = API response object
//
// Example:
// APIResponse<User>   → data is a User
// APIResponse<User[]> → data is an array of Users
// APIResponse<null>   → data is null
function sendJsonData<T>(
  res: ServerResponse,
  statusCode: number,
  body: APIResponse<T>,
): void {

  // Set HTTP status code
  res.statusCode = statusCode;

  // Tell the client that the response contains JSON
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";
    const requestURL = new URL(
      req.url ?? "/",
      `http:${req.headers.host}`,
    );
    const pathName = requestURL.pathname;

    if (method === "GET" && pathName === "/") {

      // Send a successful JSON response
      sendJsonData(res, 200, {
        success: true,
        message: "server is running",

        // Here T becomes:
        // { routes: string[] }
        //
        // because we are passing an object as data
        data: {
          routes: ["GET/users"],
        },
      });
      return
    }
    if (method === "GET" && pathName === "/users") {

      // Send users array as the response data
      //
      // Here T becomes:
      // User[]
      //
      // because "users" is User[]
      sendJsonData(res, 200, {
        success: true,
        message: "user fetched successfully",
        data: users,
      });
    }

    sendJsonData<null>(res, 404, {
      success: false,
      message: "route not found",
      error: "pathname method does not exist",
    });
    return
  },
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});