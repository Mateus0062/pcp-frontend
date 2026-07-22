import MenuLateral from "@/components/MenuLateral";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <div className="flex min-h-screen">
            <MenuLateral />

            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}