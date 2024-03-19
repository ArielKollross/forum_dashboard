export function Sidebar() {
    return(
        <aside className="h-[294px] w-[256px] bg-bg_secondary">
            {/* Como não sabemos o conteudo da imagem, não adicioanamos o alt */}
            <img
                className="bg-cover w-full h-[72px]"
                src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             />

            <div className="flex flex-col items-center">

                <img
                    className="rounded-lg border-2 border-green-500"
                    src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?q=50&w=60&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user image"
                />

                <div className="text-center mt-4">
                    <strong>User name</strong>
                    <div>User profession</div>
                </div>

                <div className="border border-gray-600 w-full"></div>

            </div>

            <footer className="m-8">
                <a href="">
                    <button className="border rounded-lg bg-transparent border-green-500 h-[50px] w-[200px]">
                        <span className="text-green-500">
                            Editar seu perfil
                        </span>
                    </button>
                </a>
            </footer>
        </aside>
    )
}