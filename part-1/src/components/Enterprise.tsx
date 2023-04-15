
const Enterprise = () => {
    return (
        <section className="relative mt-20 lg:mt-32 py-5 md:py-10 lg:py-[65px] overflow-hidden bg-dark-blue rounded-xl">
            <h2 className="max-w-md lg:max-w-[685px] w-full p-2 mx-auto mb-2 md:mb-8 text-center text-white text-xl md:text-3xl lg:text-5xl lg:leading-[72px] font-manrope">An enterprise template to ramp up your company website</h2>

            <form className="p-5 max-w-[605px] md:p-0 w-full mx-auto flex flex-col items-center md:flex-row gap-6">
                <input type="text" placeholder="Your email address" className="px-8 py-3 w-full md:max-w-[370px] text-lg lg:text-xl leading-8 bg-white placeholder:text-black text-black rounded-[240px] border-2 border-white outline-none focus:bg-slate-200" />
                <button type="submit" className="w-fit px-4 sm:px-8 md:px-14 py-2 sm:py-4 text-lg lg:text-xl font-bold bg-green rounded-[56px] border-2 border-green hover:bg-white hover:text-green transition-all duration-500">Start now</button>
            </form>
        </section>
    )
}

export default Enterprise