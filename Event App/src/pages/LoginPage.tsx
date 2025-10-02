import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";
import { InputGroup } from "../components/InputGroup";
import { useForm } from "../hooks/useForm";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";


interface LoginForm {
    email: string;
    password: string;
}

const initialValues: LoginForm = {
    email: "",
    password: "",
}

export function LoginPage() {
    const { login: authLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const validate = (values: LoginForm) => {
        const errors: Partial<LoginForm> = {};
        if (!values.email) errors.email = "Email is required";
        if (!values.password) errors.password = "Password is required";
        return errors;
    };

    const { values: formData, errors, error, isLoading, handleChange, handleSubmit } = useForm<LoginForm>({
        initialValues,
        validate,
        onSubmit: async (values) => {
            const user = await login(values.email, values.password);
            if (user) {
                authLogin(user);
                navigate(from, { replace: true });
            } else {
                throw new Error("Invalid email or password");
            }
        },
    });

    return (<div className="mx-auto max-w-md">
        <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Login</h2>

            {error && <ErrorMessage error={error} />}
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <InputGroup error={errors.email} name="email" label="Email"
                    value={formData.email} onChange={handleChange} />
                <InputGroup error={errors.password} name="password" label="Password" type="password"
                    value={formData.password} onChange={handleChange} />

                <div className="flex flex-col space-y-3">
                    <Button disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>
                    <div className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link className="text-blue-600 hover:text-blue-800" to="/register">Register</Link>
                    </div>
                </div>

            </form>
        </div>
    </div>)
}