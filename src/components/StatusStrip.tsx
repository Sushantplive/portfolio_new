import { stats } from '../data/portfolio'

function StatusStrip() {
  return (
    <div className="status">
      <div className="status-inner">
        {stats.map((stat) => (
          <div className="status-item" key={stat.label}>
            <span className="status-dot"></span>
            <span className="status-num mono">{stat.num}</span>
            <div className="status-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatusStrip
