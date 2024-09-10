import SearchBar from "../../components/search-bar/SearchBar";
import { envConfig } from "../../config/envConfig";

export default function Header() {
  return (
    <div className="flex flex-">
      <img src={`${envConfig.ASSETS_URL}/src/assets/brand.svg`} alt="logo" />
      <SearchBar></SearchBar>
    </div>
  )
}