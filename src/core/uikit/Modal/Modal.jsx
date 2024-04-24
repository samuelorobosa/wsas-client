
export default function Modal({children, className, open = false}){
    return(
        open && (
            <section style={{position: "absolute"}}
                     className={`modal__container ${className}`}>
                {children}
            </section>
        )
    )
}
