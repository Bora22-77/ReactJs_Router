
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
const HomeShirt=[
  {Image: "https://images.footballfanatics.com/tottenham-hotspur/tottenham-hotspur-nike-home-stadium-shirt-2025-26-womens_ss5_p-202504120+u-aubjikzw18l1lwdiw2ex+v-fonzhtajnjxhkmgykwaf.jpg?_hv=2&w=600"},
  {Image: "https://images.footballfanatics.com/tottenham-hotspur/tottenham-hotspur-shower-jacket-black/grey-kids_ss5_p-200396504+u-ca0jggyfgifizsnubdvr+v-uwzuoqjij9t42p9biboq.jpg?_hv=2&w=600"},
  {Image: "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-home-authentic-shirt-2025-26_ss5_p-202794647+u-ppoomurbtw1mm3sfnozo+v-0xhhmhirvm9ujl1stzzd.jpg?_hv=2&w=600"},
  {Image: "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-third-shirt-2025-26-kids-long-sleeve-with-cunha-10-printing_ss5_p-203288611+u-kkks6y7hgbuoiyk8jsbh+v-pqckkm6eyhmbrvxc7gpa.jpg?_hv=2&w=600"},
  {Image: "https://images.footballfanatics.com/germany-national-team/germany-frauen-small-mono-logo-graphic-t-shirt-white-womens_ss5_p-200374904+u-gvdrezcrpqral407ahvf+v-sa0pyb8afbtpsoib3kyv.jpg?_hv=2&w=600"},
  {Image: "https://images.footballfanatics.com/germany-national-team/germany-adidas-home-shirt-kroos-number-18-2010-11-excellent-8/10_ss5_p-203190277+u-niqc8wcwkhjxcb6jat9k+v-rq5hvnrgfl1a2naaehqv.jpg?_hv=2&w=600"},
  {Image: "https://images.footballfanatics.com/borussia-dortmund/borussia-dortmund-puma-home-shirt-25-26_ss5_p-202498777+u-tnp5f3sawsrbz13q7oq7+v-tcxykb8y2ashhvtc3r9w.jpg?_hv=2&w=600"},
  {Image: "https://images.footballfanatics.com/borussia-dortmund/borussia-dortmund-puma-away-shirt-2024-25_ss5_p-201044543+u-btndcx84x0an4bbp0mon+v-pnl8bti4q6upcpkibzeb.jpg?_hv=2&w=600"},
];

const Home = () => {
  return (
    <div>
        <nav>
          <Navbar/>
        </nav>
        <main>
            <Banner/>
            
            <h2 className="text-center text-7xl text-blue-800 font-bold font-serif py-6">Famous</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap sm:gap-5 md:gap-5 lg:gap-5">
              {
                HomeShirt.map((homeshirt,index)=>(
                  <div key={index}>
                    <img src={homeshirt.Image} alt="" />
                  </div>
                )

                )
              }
            </ul>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  )
}

export default Home