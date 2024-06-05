
import Body from './components/Body';
// document.body.style.backgroundColor = '#0E0E11';


function App() {
  return (
    <>
      <div>
        <div className="flex justify-between pt-4 px-3 w-[32rem] mx-auto">

          <div className="">
            <span className="material-symbols-outlined">
              menu
            </span>
          </div>
          <div className="">

            <span className="material-symbols-outlined">
              notifications
            </span>


          </div>
        </div>

      </div>
      <Body/>
    </>
  );
}

export default App;
