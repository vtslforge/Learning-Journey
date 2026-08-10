import { createContext, useState } from "react";

type User = {
    name: string;
    class: string;
    rollno: string;
    school: string;
};

const userData: User = {
    name: "Vatsalya Singh",
    class: "6th",
    rollno: "42",
    school: "JNWS"
};

type UserContextType = {
    user: User;
    num: number;
    setNum: React.Dispatch<React.SetStateAction<number>>;
};

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [num, setNum] = useState<number>(2);

    const value: UserContextType = {
        user: userData,
        num,
        setNum,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};