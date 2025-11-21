import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import ButtonGroup from "@/components/ButtonGroup";
import ProductsHeader from "@/components/ProductsHeader";
function page() {

    return(
<div>
  <Navbar/>
  <ProductsHeader/>
  <ProductGrid/>
  <ButtonGroup/>
  <Footer/>
</div>
    )
}
export default page