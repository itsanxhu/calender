import { ChevronRight, ChevronLeft, EllipsisVertical } from "lucide-react";

const App = () => {
  return (
    <div className="mt-32 flex flex-col gap-2 justify-center items-center">
      <div className="h-[21rem] w-[22rem] bg-stone-100 rounded-3xl border-2 border-neutral-400/30 px-7 py-5 cursor-pointer active:scale-95 transition-transform duration-200">
        {/* Header */}
        <div className="flex font-bold justify-between items-center">
          <ChevronLeft />
          <h1 className="text-lg">February 2024</h1>
          <ChevronRight />
        </div>
        {/* Week names */}
        <div className="grid my-5 grid-cols-7 font-semibold gap-4 ">
          <button>Mo</button>
          <button>Tu</button>
          <button>We</button>
          <button>Th</button>
          <button>Fr</button>
          <button>Sa</button>
          <button>Su</button>
        </div>
        {/* dates */}
        <div className=" font-medium grid grid-cols-7 auto-rows-[20px] gap-6 place-items-center">
          <button className="text-neutral-400/80">29</button>
          <button className="text-neutral-400/80">30</button>
          <button className="text-neutral-400/80">31</button>
          <button className="col-start-4">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="h-9 w-9 bg-neutral-950 text-neutral-100 rounded-full">
            10
          </button>
          <button>11</button>
          <button>12</button>
          <button>13</button>
          <button>14</button>
          <button>15</button>
          <button>16</button>
          <button>17</button>
          <button>18</button>
          <button>19</button>
          <button>20</button>
          <button>21</button>
          <button>22</button>
          <button>23</button>
          <button>24</button>
          <button>25</button>
          <button>26</button>
          <button>27</button>
          <button>28</button>
          <button>29</button>
          <button className="text-neutral-400/80">1</button>
          <button className="text-neutral-400/80">2</button>
          <button className="text-neutral-400/80">3</button>
        </div>
      </div>
      <div className="h-[5rem] w-[22rem] bg-stone-100 rounded-3xl border-2 border-neutral-400/30 px-5 py-5 flex justify-between cursor-pointer active:scale-95 transition-transform duration-200">
        <div className="flex justify-center items-center gap-4">
          <div className="w-10">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1280px-Apple_TV_Plus_Logo.svg.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-tight">Apple TV+</p>
            <p className="text-xs text-neutral-400 tracking-tight">
              15 Feb, 2024
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold tracking-tight text-[14px]">6,99 EUR</p>
          <EllipsisVertical size={18} />
        </div>
      </div>
    </div>
  );
};

export default App;
