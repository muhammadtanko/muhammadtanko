


export const Quote = () => {
    return (
        <div className="mt-5">
            <article className="mx-auto max-w-3xl  flex flex-col  rounded-md shadow-md p-2">
                <blockquote className="relative bg-gray-300">
                    <span className="absolute -top-3 left-10 text-gray text-5xl -ml-8">“</span>
                    <p className="text-2xl font-medium text-white border-2 border-gray p-4 ">
                    With great power comes great electric bill
                    </p>
                    <span className="absolute -bottom-10 right-[60px] text-gray text-5xl -mr-8">”</span>

                </blockquote>
                <p className="place-self-end text-2xl w-[140px] font-medium text-white border-2 border-gray py-2 px-1 text-right">
                    - Dr Who.
                </p>
            </article>
            <div className="absolute bottom-1 right-0 w-[71px] h-[71px] border-2 border-gray"></div>

        </div>
    )
}