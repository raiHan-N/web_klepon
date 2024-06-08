import Image from "next/image"
import {Kalam} from "next/font/google"
const kalam = Kalam({subsets: ["latin-ext"],weight:"700"} );

const Abouts = () => {
  return (
    <section id="about">
  <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
      <h2 className={`text-4xl font-bold sm:text-7xl text-center w-full mx-auto ${kalam.className}`}>
        Tentang Kami
      </h2>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative  w-full">
        <Image
          alt=""
          src="/logo.png"
          className=""
        fill       
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-dark">
            
            <p><b>Klepon Aneka</b></p>
          <p>
          Di Klepon Aneka, kami menghadirkan kelezatan klepon tradisional dengan sentuhan modern. Misi kami adalah memperkenalkan rasa unik klepon ke seluruh dunia.
          </p>
          <p><b>Pendiri Kami</b></p>
          <p>
          Ramahadi Gymnastiar, pendiri kami yang bersemangat, memadukan kecintaannya pada kuliner Indonesia dengan inovasi untuk menciptakan klepon yang istimewa. Selain menjadi pendiri, Ramahadi juga berperan penting dalam proses produksi kami.
          </p>
          <p><b Tim Kami></b></p>
          <p>Kami memiliki tim yang berdedikasi, terdiri dari:<br/>

            *Viki Dwi Destyawan: Mengelola keuangan dan memastikan kelancaran operasional.<br/>


*Yoga Hadi Syahputra: Bertanggung jawab atas penjualan dan pengembangan pasar.<br/>

  
*Raihan Nurliansyah: Mengembangkan strategi pemasaran untuk menjangkau lebih banyak pecinta klepon.<br/>
        
</p>

<p>
Nikmati setiap gigitan klepon kami dan jadilah bagian dari keluarga Klepon Aneka!
</p>

        </article>
      </div>
    </div>
  </div>
</section>
  )
}

export default Abouts