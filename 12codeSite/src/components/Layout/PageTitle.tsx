export const PageTitle = ({title}: any) => {
    return (
        <div className="flex items-center gap-6 mb-6">
            <div className="h-px bg-white/20 w-16"></div>
            <span className="text-xs text-white/50 uppercase tracking-[0.3em]">
              {title}
            </span>
          </div>
    )
}