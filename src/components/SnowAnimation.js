'use client';

export default function SnowAnimation() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="snowflake" style={{left: '5%', fontSize: '18px', animationDuration: '19s'}}>❄️</div>
      <div className="snowflake" style={{left: '20%', fontSize: '14px', animationDuration: '16s'}}>❄️</div>
      <div className="snowflake" style={{left: '35%', fontSize: '20px', animationDuration: '22s'}}>❄️</div>
      <div className="snowflake" style={{left: '50%', fontSize: '16px', animationDuration: '18s'}}>❄️</div>
      <div className="snowflake" style={{left: '65%', fontSize: '22px', animationDuration: '24s'}}>❄️</div>
      <div className="snowflake" style={{left: '80%', fontSize: '15px', animationDuration: '17s'}}>❄️</div>
      <div className="snowflake" style={{left: '92%', fontSize: '19px', animationDuration: '20s'}}>❄️</div>
    </div>
  );
}
