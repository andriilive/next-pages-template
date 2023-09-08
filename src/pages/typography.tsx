import DefaultLayout from "@/src/layouts/default";
import {Typo} from "@/src/components.draft";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className={'max-w-[1280px] px-8 mx-auto space-y-10 divide-y divide-white'}>
                <section className={'py-10'}>
                    <span className={'text-muted-foreground'}>Pure</span>
                    <Typo/>
                </section>
                <section className={'py-10'}>
                    <div className={'prose max-w-[1280px]'}>
                        <span className={'text-muted-foreground'}>@tailwindcss/typography</span>
                        <Typo/>
                    </div>
                </section>
            </div>
        </DefaultLayout>
    );
}
