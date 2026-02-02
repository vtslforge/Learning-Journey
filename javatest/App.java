import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class App {
    public static void main(String[] args) throws Exception {
        // Create a server on port 8080
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // Route for the Homepage
        server.createContext("/", exchange -> {
            String response = """
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Java Modern Web</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
                <body class="bg-slate-900 text-white flex items-center justify-center h-screen">
                    <div class="text-center p-10 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700">
                        <h1 class="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            Java Web Server
                        </h1>
                        <p class="text-slate-400 mb-6">Built in a single .java file</p>
                        <button onclick="fetchData()" class="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition">
                            Call API
                        </button>
                        <div id="result" class="mt-4 text-emerald-400 font-mono"></div>
                    </div>
                    <script>
                        function fetchData() {
                            fetch('/api/status')
                                .then(res => res.text())
                                .then(data => document.getElementById('result').innerText = data);
                        }
                    </script>
                </body>
                </html>
                """;
            exchange.getResponseHeaders().set("Content-Type", "text/html");
            exchange.sendResponseHeaders(200, response.length());
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(response.getBytes());
            }
        });

        // Route for a simple API
        server.createContext("/api/status", exchange -> {
            String jsonResponse = "Server is running perfectly! Time: " + java.time.LocalTime.now();
            exchange.sendResponseHeaders(200, jsonResponse.length());
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(jsonResponse.getBytes());
            }
        });

        System.out.println("🚀 Server started at http://localhost:8080");
        server.start();
    }
}