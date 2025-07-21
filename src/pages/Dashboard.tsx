// src/pages/Dashboard.tsx
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
    const { logout } = useAuth();

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Bem-vindo ao Dashboard 👋</h1>
            <button onClick={logout} style={{ marginTop: "1rem" }}>
                Sair
            </button>
        </div>
    );
}