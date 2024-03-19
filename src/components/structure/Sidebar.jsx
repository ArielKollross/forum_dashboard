import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className="w-[256px] bg-bg_secondary">
            {/* Como não sabemos o conteudo da imagem, não adicioanamos o alt */}
            <img
                className="bg-cover w-full h-[72px]"
                src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />

            <div className={styles.profile_user}>

                <img
                    className={styles.avatar_user}
                    src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=50&w=48&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user image"
                />

                <div className="text-center mt-4 mb-6">
                    <strong className="text-base text-gray-100 font-bold">User name</strong>
                    <div className="text-sm text-gray-400 ">User profession</div>
                </div>
            </div>

            <footer className="border-t border-gray-600">
                <a href="" className="flex justify-center items-center border rounded-lg bg-transparent border-green-300 h-[50px] w-[200px] mx-8 mb-8 mt-6">
                    <span className="text-green-300 text-base font-bold">
                        Editar seu perfil
                    </span>
                </a>
            </footer>
        </aside>
    )
}