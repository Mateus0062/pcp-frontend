import MenuLateral from "@/components/layout/MenuLateral";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <MenuLateral />

            <main className="flex-1 bg-amber-50">
                {children}
            </main>
        </div>
    )
}