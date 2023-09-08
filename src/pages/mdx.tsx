import DefaultLayout from "@/src/layouts/default";

const mdxFeatures = [
    {
        'title': 'Links / Images',
    },
    {
        'title': 'Frontmatter',
    },
    {
        'title': 'Markdown',
    },
    {
        'title': 'MDX (Import)',
    },
    {
        'title': 'MDX (Page Extension)',
    },
    {
        'title': 'Remote MDX',
    }
]

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className={'max-w-[1280px] px-8 mx-auto space-y-10 divide-y divide-white'}>
                {mdxFeatures.map(({title}, index) => (
                    <section key={`mdx-feature-${index}`} className={'py-10 text-center uppercase'}>
                        <div className={'prose max-w-[1280px]'}>
                            <span className={'text-muted-foreground'}>{title}</span>
                        </div>
                    </section>
                ))}
            </div>
        </DefaultLayout>
    );
}
