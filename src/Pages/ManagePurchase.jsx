import NavProfile from "../Components/NavProfile"

export default function ManagePurchase() {
    return(
        <>
        <div className="grid-profile">
            <div className="nav-profile">
                <NavProfile/>
            </div>
            <div className="main-profile">
                <h1 className="title-center">Administrar compras</h1>
                <span>Aún no hay compras</span>
            </div>
        </div>
    </>
    )
}