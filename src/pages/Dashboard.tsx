import { useAuth } from "../hooks/useAuth";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
    const { logout } = useAuth();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Painel de Ordens de Serviço</h1>
                <button onClick={logout} className={styles.logoutButton}>
                    Sair
                </button>
            </div>

            <p>Seja bem-vindo! Em breve você verá as ordens cadastradas aqui.</p>
        </div>
    );
}