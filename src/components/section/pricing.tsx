import Card from "../../components/card";

const news = [
  {
    title: "BASIC",
    price: "FREE",
    href: "#",
    fasilitasa: "- Mencatat barang masuk ",
    fasilitasb: "- Mencatat barang keluar ",
    fasilitasc: "- Mencatat hasil keuntungan ",
    fasilitasd: "",
    fasilitase: "",
    fasilitasf: "",
  },
  {
    title: "BUSINESS",
    price: "$24/month",
    href: "#",
    fasilitasa: "- Mencatat barang masuk dan keluar ",
    fasilitasb: "- Mencatat hasil keuntungan ",
    fasilitasc: "- Support 7x24 Jam ",
    fasilitasd: "- Menganalisa hasil penjualan dengan CHART ",
    fasilitase: "",
    fasilitasf: "",
  },
  {
    title: "ENTERPRENEUR",
    price: "$32/month",
    href: "#",
    fasilitasa: "- Mencatat barang masuk dan keluar ",
    fasilitasb: "- Mencatat hasil keuntungan ",
    fasilitasc: "- Support 7x24 Jam ",
    fasilitasd: "- Menganalisa hasil penjualan dengan CHART",
    fasilitase: "- Export data ke Excel",
    fasilitasf: "- AI Prediksi penghasilan",
  },
];

const Pricing = () => {
  return (
    <>
      <section className="relative mt-5 mb-20 h-full flex w-full flex-col bg-white px-4 lg:px-0 ">
        <div className="flex flex-col justify-center text-center  font-open-sans">
          <div className=" text-[32px] font-bold">Pricing Plans</div>
          <div className=" text-xl ">
            Start building for free, then add a site plan to go live.
          </div>
          <div className="mb-10 text-xl ">
            Account plans unlock additional features.
          </div>
        </div>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
          {news.map((i) => (
            <Card
              key={i.title}
              title={i.title}
              price={i.price}
              href={i.href}
              fasilitasa={i.fasilitasa}
              fasilitasb={i.fasilitasb}
              fasilitasc={i.fasilitasc}
              fasilitasd={i.fasilitasd}
              fasilitase={i.fasilitase}
              fasilitasf={i.fasilitasf}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
