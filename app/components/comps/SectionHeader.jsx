import clsx from "clsx";

const SectionHeader = ({ title }) => {
    return (
        <h2 className={clsx( 'font-bold uppercase text-5xl pb-12 text-grey text-center')}>
            {title}
            <hr className="max-w-48 border-4 border-primary mt-4 mx-auto" />
        </h2>
    );
}

export default SectionHeader;