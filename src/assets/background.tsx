import { LayoutProps } from "@utils/models/struc";

export default function Background({ children }: LayoutProps) {
    return (
        <div className="w-full h-screen absolute z-[-1] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            {/* <ul className="circles absolute top-0 left-0 w-full h-full overflow-hidden">
                {[...Array(12)].map((_, index) => (
                    <li key={index}> </li>
                ))}
            </ul> */}
            {children}
        </div>
    );
}
