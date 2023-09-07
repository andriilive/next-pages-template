import {TypographyDemo} from "@/components/draft";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className={'max-w-[1280px] px-8 mx-auto space-y-10 divide-y divide-white'}>
                <section className={'py-10'}>
                    <span className={'text-muted-foreground'}>Pure</span>
                    <TypographyDemo />
                </section>
                <section className={'py-10'}>
                    <div className={'prose max-w-[1280px]'}>
                        <span className={'text-muted-foreground'}>@tailwindcss/typography</span>
                        <TypographyDemo />
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
}
