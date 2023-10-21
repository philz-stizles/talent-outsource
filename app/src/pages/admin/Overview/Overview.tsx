import { Code2, Code2Icon } from 'lucide-react';

const Overview = () => {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="w-11/12 mx-auto flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Admin Overview</h2>
        </div>
        <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start justify-between space-x-4 py-6">
              <div className="flex items-center space-x-4">
                <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    src="https://i.pravatar.cc/150?img=1"
                    alt=""
                  />
                </span>
                <div>
                  <p className="text-sm font-bold mb-1">Sofia Davis</p>
                  <p className="text-sm text-muted-foreground">m@example.com</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-start gap-4 space-y-0">
                <div className="p-1 bg-slate-800 rounded-md">
                  <Code2 />
                </div>
                <div>
                  <div className="text-3xl font-semibold mb-2 leading-none">
                    2350
                  </div>
                  <p className="text-sm text-muted-foreground text-slate-400">
                    Code challenges completed
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-600 bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-start gap-4 space-y-0">
                <div className="p-1 bg-slate-800 rounded-md">
                  <Code2Icon />
                </div>

                <div>
                  <div className="text-3xl font-semibold mb-2 leading-none">
                    2350
                  </div>
                  <p className="text-sm text-muted-foreground text-slate-400">
                    Code challenges completed
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-600 bg-card text-card-foreground shadow">
              <div className="p-6 flex flex-row items-start gap-4 space-y-0">
                <div className="p-1 bg-slate-800 rounded-sm">
                  <Code2 />
                </div>
                <div>
                  <div className="text-3xl font-semibold mb-2 leading-none">
                    2350
                  </div>
                  <p className="text-sm text-muted-foreground text-slate-400">
                    Code challenges completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

// <main className="flex-1 flex flex-col">
//   <div className="flex items-center gap-14 bg-slate-950 text-slate-100 text-sm font-normal px-8 py-3">
//     <Logo iconOnly />
//     <nav className="flex-1">
//       <ul className="flex items-center gap-8">
//         <li>
//           <NavLink className=" font-semibold" to="">Overview</NavLink>
//         </li>

//         <li>
//           <NavLink to="">Find a Job</NavLink>
//         </li>

//         <li>
//           <NavLink to="">My Jobs</NavLink>
//         </li>
//         <li>
//           <NavLink to="">Quiz</NavLink>
//         </li>
//         <li>
//           <NavLink to="">Coding Challenge</NavLink>
//         </li>
//         <li>
//           <NavLink to="">English Verification</NavLink>
//         </li>
//         <li>
//           <NavLink to="">Profile</NavLink>
//         </li>
//         <li>
//           <NavLink to="">Community</NavLink>
//         </li>
//       </ul>
//     </nav>
//     <div className="flex items-center gap-1">
//       <IconButton icon={MessageSquare} />
//       <IconButton icon={Info} />
//       <IconButton icon={Settings} />
//       <IconButton icon={LogOut} onClick={() => logout()} />
//     </div>
//   </div>
//   <div className="bg-slate-950 text-slate-100 py-8">
//     <div className="w-11/12 mx-auto">
//       <h2 className="font-semibold">Overview</h2>
//     </div>
//   </div>
//   <div className="bg-slate-50 py-8 flex-1">
//     <div className="w-11/12 mx-auto grid grid-cols-2">
//       <div className="grid grid-cols-2 gap-4">
//         <ActivityCard
//           iconColor="bg-rose-100"
//           title="React Technical Interview"
//           icon={Lightbulb}
//         />
//         <ActivityCard
//           iconColor="bg-green-100"
//           title="React Technical Interview"
//           icon={Lightbulb}
//         />
//         <ActivityCard
//           iconColor="bg-yellow-100"
//           title="React Technical Interview"
//           icon={Lightbulb}
//         />
//         <ActivityCard
//           iconColor="bg-indigo-100"
//           title="React Technical Interview"
//           icon={Lightbulb}
//         />
//       </div>
//       <div></div>
//     </div>
//   </div>
// </main>
