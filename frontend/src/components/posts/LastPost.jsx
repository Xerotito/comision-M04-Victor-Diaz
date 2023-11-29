export default function LastPost() {
    return (
        <article className='card lg:card-side bg-base-100 shadow-xl'>
            <figure className='w-full lg:w-[60%]' >
                <img
                    src='https://imagenes.elpais.com/resizer/6XwGH2IGBdIfkd7qAVZsKwVFXZA=/828x466/filters:focal(2372x2074:2382x2084)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/R7ZWFLRRWBEMJMJ3JLORMMZZHE.jpg'
                    alt='Foto de ejemplo'
                />
            </figure>
            <div className='card-body w-full lg:w-[40%]'>
                <h2 className='card-title'>
                    Templos, atardeceres mágicos y cuevas sagradas en Luang Prabang, la joya colonial de Laos
                </h2>
                <span className='text-xs'>PACO NADAL|28 NOV 2023 - 01:45 ART</span>
                <p>Un casco antiguo de aires franceses declarado patrimonio mundial, el Palacio Real, un café junto al río Mekong y dos escapadas cercanas para sacarle el máximo partido a la ciudad más cosmopolita y turística de este país del sudeste asiático</p>
                <div className='card-actions border-2 border-black'>
                    Actions
                </div>
            </div>
        </article>
    )
}
