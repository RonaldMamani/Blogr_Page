import SubTitle from "../Texts/SubTitle";
import TextCommon from "../Texts/TextCommon";

export default function TextLittle({title,descrition}) {
    return (
        <div className="flex flex-col gap-3 lg:text-start">
            <SubTitle className="text-[#1F3E5A] text-3xl font-bold mx-6 lg:mx-0" text={title} />
            <TextCommon className="text-[#4C5862] p-2" text={descrition} />
        </div>
    )
}