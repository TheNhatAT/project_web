export default function Footer() {



    return (
        <>
            <div />
            <footer className="relative border-t-2 border-slate-800 mt-12 bg-blueGray-200 pt-8 pb-6 p-5">
                <div className=" mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Liên hệ với chúng tôi tại!</h4>

                            <div className="mt-6 lg:mb-0 mb-6">
                                <button
                                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                    <i className="fab fa-twitter"></i></button>
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button">
                                    <i className="fab fa-facebook-square"></i></button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.creative-tim.com/presentation?ref=njs-profile">About
                                                Us</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/privacy?ref=njs-profile">Privacy
                                                Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}