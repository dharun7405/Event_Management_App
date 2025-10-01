import { useAuth } from "../contexts/AuthContext"

export function LoginPage() {
    const auth = useAuth();
    console.log(auth);
    return <div>LoginPage</div>
}