import { Typography } from '../atoms/typography';
import { Logo } from '../atoms/logo';
import Link from 'next/link';


export const SelectionCard = ({ href, title, text }: any) => {
    return (
        <Link href={href} className="block group cursor-pointer">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-bank-primary hover:shadow-md transition-all text-center">
                <div className="mx-auto h-12 w-12 text-gray-400 group-hover:text-bank-primary mb-4">
                    <Logo className="w-12 h-12" />
                </div>
                <Typography variant="h3" className="mb-2">{title}</Typography>
                <Typography variant="body" className="text-gray-500 text-sm">{text}</Typography>
            </div>
        </Link>
    )
};