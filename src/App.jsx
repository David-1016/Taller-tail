import HamburguerIcon from "./components/HamburguerIcon"
import LogoIcon from "./components/LogoIcon"
import ImagenAliBravo from "./assets/images/avatar-ali.png"
import ImagenIntro from "./assets/images/illustration-intro.svg"
import IconFacebook from "./components/IconFacebook"
import IconYoutube from "./components/IconYoutube"
import IconTwitter from "./components/IconTwitter"
import IconPinterest from "./components/IconPinterest"
import IconInstagram from "./components/IconInstagram"
import ImagenTabla from "./assets/images/bg-tablet-pattern.svg"

const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/bg-simplify-section-mobile.svg')] bg-contain bg-no-repeat" >
        <header className="container mx-auto px-4">
          <div className="flex justify-between pt-8">

            <button>< LogoIcon /></button>
            <button><HamburguerIcon /></button>
          </div>
        </header>


        <main className="container mx-auto px-4 mt-8 ">
          <div className="bg-white rounded-md ">
            <article>

              <div className="justify-center">
                <img src={ImagenIntro} alt="" />
                <h1>Bring everyone <br /> together to build <br /> better products</h1>
                <div className="justify-center">
                  <p>Manage makes it simple for software <br /> teams to plan day-to-day tasks while <br />
                    keeping the larger team goals in view</p>
                </div>
                <button className="bg-orange-600 rounded-md pt-8">GET STARTED</button>
              </div>

            </article>


            <article >
              <div className="pt-8 justify-center">
                <h2>Whats different <br /> about Manage</h2>
                <p>Manage makes it simple for software <br /> teams to plan day-to-day tasks while <br />
                  keeping the larger team goals in view</p>

              </div>
            </article>

            <article>
              <div className="flex justify-around pt-8">
                <button>1</button>
                <h1>Track company-wide progress</h1>
              </div>

              <p>See how your day to do class fit into the wider <br />vision
                .Go from tracking progress at the milestone <br /> level all
                the way donde to the smallest of details. Never lose sight of the bigger picture again</p>

            </article>


            <article>
              <div className="flex justify-around pt-8">
                <button>2</button>
                <h1>Advanced built-in reports</h1>
              </div>

              <p>See how your day to do class fit into the wider <br />vision
                .Go from tracking progress at the milestone <br /> level all
                the way donde to the smallest of details. Never lose sight of the bigger picture again</p>

            </article>

            <article>
              <div className="flex justify-around pt-8">
                <button>3</button>
                <h1>Everything you need in one plase</h1>
              </div>

              <p>See how your day to do class fit into the wider <br />vision
                .Go from tracking progress at the milestone <br /> level all
                the way donde to the smallest of details. Never lose sight of the bigger picture again</p>

            </article>



            <article>
              <div className=" justify-center">
                <h2>What they've said</h2>
                <div className="flex justify-center">
                  <img src={ImagenAliBravo} alt="" />
                </div>

                <p>"We have been able to cancel so many <br />
                  other subscriptions since using Manage. <br />
                  There is no more cross-channel confusion <br />
                  and everyone is much more focused."</p>
              </div>

              <div className="pt-8 flex justify-center">
                <span className="inline-block h-5 w-5 rounded-full border-2 flex-none bg-gray-300"></span>
                <span className="inline-block h-5 w-5 rounded-full border-2 flex-none bg-orange-600"></span>
                <span className="inline-block h-5 w-5 rounded-full border-2 flex-none bg-gray-300"></span>
                <span className="inline-block h-5 w-5 rounded-full border-2 flex-none bg-gray-300"></span>

              </div>


              <div>
                <button className="bg-orange-600">Get Started</button>
              </div>

            </article>


            <article className="pt-8  ">
              <div className="bg-orange-600">
                <h2>Simplify how <br />
                  your team works <br />
                  today</h2>

                <div className="flex justify-center">
                  <button className="bg-white text-orange-600">Get Started</button>
                </div>

              </div>
            </article>


            <article>
              <div className="bg-gray-800 flex">
                <div className="flex">
                  <form className="flex items-center gap-4 rounded-md overflow-hidden py-4 px-4">
                    <input className="w-full text-white " type="text" placeholder="Create a new todo" />
                  </form>
                  <button className="bg-orange-600">Go</button>
                </div>

              </div>

              <div className="bg-gray-800 pt-8">
                <div className="flex justify-evenly">
                  <div className="border-r-10">
                    <ul>
                      <li>Home</li>
                      <li>Pricing</li>
                      <li>Products</li>
                      <li>About Us</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Careers</li>
                      <li>Community</li>
                      <li>Privacy Policy</li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="pt-8 flex justify-center">
                <button><IconFacebook /></button>
                <button><IconYoutube /></button>
                <button><IconTwitter /></button>
                <button><IconPinterest /></button>
                <button><IconInstagram /></button>


                <button><LogoIcon /></button>
              </div>


            </article>



          </div>






        </main>




      </div>
    </>
  )
}
export default App;