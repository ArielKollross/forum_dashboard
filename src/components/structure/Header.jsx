import igniteLogo from '../../assets/Ignite_logo.svg';

export function Header() {
    return (
        <header className="w-full bg-bg_secondary flex justify-center items-center h-[6.25rem]">
            <div className="container flex justify-center items-center text-2xl text-title_text_color font-bold py-5">
                <img
                    className="flex justify-center"
                    src={igniteLogo} alt="Logo do ignite"
                />
                <h1 className="h-8 pr-4">
                    Ignite feed
                </h1>
            </div>
        </header>
    )
}
