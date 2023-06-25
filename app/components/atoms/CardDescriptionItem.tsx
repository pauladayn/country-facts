export const CardDescriptionItem = ({ children, title }: { title: string, children: React.ReactNode }) => (
    <>
        <p className='text-xs'>{title}</p>
        <div className='min-w-full 
        cursor-pointer rounded-full 
        bg-white dark:bg-transparent 
        px-3 py-2 text-center 
        hover:bg-transparent hover:text-white 
        hover:ring-1 hover:ring-white dark:ring-teal-300 
        dark:ring-1 dark:hover:bg-white
         dark:hover:text-purple-500'>
            <div className='flex justify-around items-center'>{children}</div>
        </div>
    </>
)