export function Nav() {
    return (
        <nav className="border-b border-white/10 bg-black/50 backdrop-blur-sm fixed w-full flex justify-between z-10">
            <div className="container flex h-16 items-center px-4 w-max">
                <a href="/" className="mr-6 flex items-center w-max">
                    <span className="text-xl font-bold text-white w-max">ThaiBadWords</span>
                </a>
            </div>
            <div className="ml-auto flex items-center gap-4">
                <a href="https://github.com/SIT-SandBox/thai-bad-words" target="_blank" className="text-gray-300 hover:text-white">
                    <img className="h-7 w7 rounded-full" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"></img>
                </a>
                <a href="https://www.npmjs.com/package/@sit-sandbox/thai-bad-words" target="_blank" className="text-sm font-medium text-gray-300 hover:text-white">
                    <img className="h-5 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"></img>
                </a>
            </div>
        </nav>
    )
}
