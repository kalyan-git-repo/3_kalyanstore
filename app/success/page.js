import Link from "next/link"
export default function success() {
    return (
        <div className="page-container">
            <h2 className="text-large">Thank you for your purchase 🎉🎉</h2>
            <Link href={'/'}>
                <button>continue shopping</button>
            </Link>
        </div>
    )
}