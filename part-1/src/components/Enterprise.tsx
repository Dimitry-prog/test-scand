
const Enterprise = () => {
    return (
        <section className="relative mt-32 py-[72px] overflow-hidden bg-dark-blue rounded-xl">
            <h2 className="max-w-[600px] w-full mx-auto mb-12 text-center text-white text-5xl leading-[72px] font-manrope">An enterprise template to ramp up your company website</h2>

            <form className="max-w-[600px] w-full mx-auto flex gap-6">
                <input type="text" placeholder="Your email address" className="px-8 py-3 max-w-[370px] w-full text-xl leading-8 bg-white placeholder:text-black rounded-[240px] border-2 border-white outline-none" />
                <button type="submit" className="px-14 py-4 text-xl font-bold bg-green rounded-[56px] border-2 border-green">Start now</button>
            </form>
        </section>
    )
}

export default Enterprise