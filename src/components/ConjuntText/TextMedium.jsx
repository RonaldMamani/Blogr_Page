import TextCommon from "../Texts/TextCommon";
import Title from "../Texts/Title";

export default function TextMedium({title,descrition}) {
    return (
        <div className="text-center flex flex-col gap-3">
            <Title className="text-5xl text-white font-semibold " text={title} />
            <TextCommon className="text-white mx-10 py-3" text={descrition} />
        </div>
    )
}