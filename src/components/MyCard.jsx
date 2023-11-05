export const MyCard = ({img, title, subtitle}) => {
    return(
        <div className='selection:bg-lime-500 w-72 m-3 rounded p-3 shadow-lg hover:-translate-y-2 cursor-pointer overflow-hidden dark:shadow-slate-400 '>
            <img src={img} alt="" className="mx-auto"/>
            <h4 className="text-2xl mt-3 dark:text-slate-100">{title}</h4>
            <p className="text-justify mt-3 dark:text-slate-100">{subtitle}</p>
        </div>
    )
}