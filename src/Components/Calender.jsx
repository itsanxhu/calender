import { ChevronRight, ChevronLeft } from "lucide-react";

const Calender = () => {
  return (
    <div>
      <div className="h-[22rem] w-[22rem] bg-stone-100 rounded-3xl border-2 border-neutral-400/30 px-7 py-5 active:scale-95 transition-transform duration-200 cursor-pointer shadow-lg">
        {/* Header */}
        <div className="flex font-bold justify-between items-center">
          <p className="bg-neutral-200/70 rounded-full p-1.5 flex justify-center items-center active:scale-95 transition-transform duration-200">
            <ChevronLeft />
          </p>
          <h1 className="text-lg">February 2024</h1>
          <p className="bg-neutral-200/70 rounded-full p-1.5 flex justify-center items-center">
            <ChevronRight />
          </p>
        </div>
        {/* Week names */}
        <div className="grid my-5 grid-cols-7 font-semibold gap-6">
          <p>Mo</p>
          <p>Tu</p>
          <p>We</p>
          <p>Th</p>
          <p>Fr</p>
          <p>Sa</p>
          <p>Su</p>
        </div>
        {/* dates */}
        <div className=" font-medium grid grid-cols-7 relative auto-rows-[20px] gap-6 place-items-center">
          <p className="text-neutral-400/80">29</p>
          <p className="text-neutral-400/80">30</p>
          <p className="text-neutral-400/80">31</p>
          <p className="col-start-4">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p className="h-9 w-9 bg-neutral-950 text-neutral-100 rounded-full flex justify-center items-center">
            10
          </p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
          <p>28</p>
          <p>29</p>
          <p className="text-neutral-400/80">1</p>
          <p className="text-neutral-400/80">2</p>
          <p className="text-neutral-400/80">3</p>
        </div>
      </div>
    </div>
  );
};

export default Calender;
