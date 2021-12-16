import PageInfo from "../Common/PageInfo";
import './PageStyle2.css'

function PageStyle2({header1, title}) {

const paragraph1 = "There are so many things to do in Kyoto - you can visit golden temples and vermillion shrines, stroll through Zen rock gardens and swaying bamboo forests, slurp down bowls of ramen and participate in graceful tea ceremonies."

  return (
    <div className="page-style-2">
      <PageInfo header1={header1} title={title} paragraph1={paragraph1}/>
    </div>
  )
}

export default PageStyle2;