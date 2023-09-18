import TextCommon from "../Texts/TextCommon";
import Title from "../Texts/Title";

export default function TextMedium({title,descrition}) {
    return (
        <div className="flex flex-col gap-3">
            <Title className="text-4.5xl text-white font-semibold " text={title} />
            <TextCommon className="text-white mr- py-3 lg:mr-28 " text={descrition} />
        </div>
    )
}