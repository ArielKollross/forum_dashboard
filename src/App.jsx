import { Header } from './components/structure/Header'
import { Sidebar } from './components/structure/Sidebar'

function App() {
    return (
        <>
            <Header />
            <div className='grid grid-cols-[256px_1fr] gap-8 mx-auto px-1 my-8 container max-w-[70rem] items-start'>
                <Sidebar />
                <main>
                    <div className='max-w-[832px] bg-bg_secondary'>
                        <h3>Post title</h3>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quis qui debitis ad id laborum, nesciunt rem maiores blanditiis in obcaecati ipsum totam reprehenderit dolor dolore facilis aperiam nisi vitae!</p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
