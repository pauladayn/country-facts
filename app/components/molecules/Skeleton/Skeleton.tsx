import styles from './Skeleton.module.css';

export const Skeleton = () => (
    <>
        <div className={styles.container}>
            <div className="container max-w-xs">
                <div className='flex flex-col justify-center'>
                    <div className='mx-auto mt-8 grid h-36 w-36 place-items-center rounded-full shadow-lg'>
                        <div className={`animate-pulse ${styles.imagePlaceholder}`} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={`animate-pulse ${styles.textWrapper}`} />
                    <div className={`animate-pulse ${styles.textWrapper}`} />
                    <div className={`animate-pulse ${styles.textWrapper}`} />
                    <div className={`animate-pulse ${styles.textWrapper}`} />
                </div>
            </div>
        </div>
    </>
)