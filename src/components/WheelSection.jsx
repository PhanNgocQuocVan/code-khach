import React, { useState, useEffect } from "react";
import { Gift, X } from "lucide-react";

// Component Confetti (Pháo hoa)
const Confetti = ({ count = 50 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 2 + Math.random() * 1,
      size: 5 + Math.random() * 10,
      color: ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#C7CEEA", "#FF85A2"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => setParticles([]), 3000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti"
          style={{
            left: `${particle.left}%`,
            top: "-10px",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: "50%",
            animation: `confetti-fall ${particle.duration}s linear forwards`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
    </div>
  );
};

const WheelSection = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const prizes = [
    { id: 1, name: "Giảm giá 10%", color: "#FF6B6B" },
    { id: 2, name: "Giảm giá 20%", color: "#4ECDC4" },
    { id: 3, name: "Miễn phí lớp", color: "#FFE66D" },
    { id: 4, name: "Tặng sách", color: "#95E1D3" },
    { id: 5, name: "Giảm giá 15%", color: "#C7CEEA" },
    { id: 6, name: "Voucher 500k", color: "#FF85A2" },
    { id: 7, name: "Voucher 500k", color: "#A8E6CF" },
    { id: 8, name: "Voucher 500k", color: "#FFD3B6" },
    { id: 9, name: "Voucher 500k", color: "#FFAAA5" },
    { id: 10, name: "Voucher 500k", color: "#FF8B94" },
    { id: 11, name: "Voucher 500k", color: "#AA96DA" },
    { id: 12, name: "Voucher 500k", color: "#FCBAD3" },
  ];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    // Tạo rotation ngẫu nhiên (tối thiểu 5 vòng + một góc ngẫu nhiên)
    const randomDegree = Math.floor(Math.random() * 360);
    const totalRotation = rotation + 360 * 5 + randomDegree;

    setRotation(totalRotation);

    // Tính toán kết quả dựa trên góc cuối cùng
    setTimeout(() => {
      const normalizedDegree = ((totalRotation % 360) + 360) % 360;
      // Mỗi phần có 60 độ (360 / 6 phần)
      const sectionIndex =
        Math.floor((360 - normalizedDegree) / 60) % prizes.length;
      setResult(prizes[sectionIndex]);
      setShowConfetti(true);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <section className="bg-vongquay py-20 px-4 bg-cover bg-center relative">
      {/* Overlay to make content stand out */}

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h2 className="text-4xl font-bold text-[#018150] mb-6">
          🎡 Vòng Quay May Mắn
        </h2>
        <p className="text-[#018150] mb-6">
          Quay vòng quay để nhận phần quà hấp dẫn từ chúng tôi!
        </p>

        <div className="mb-6 flex justify-center">
          <Gift size={80} className="text-green-600" />
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Vòng quay */}
          <div className="relative">
            {/* Kim quay */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-0 h-0 border-l-12 border-r-12 border-t-12 border-l-transparent border-r-transparent border-t-blue-900"></div>
            </div>

            {/* Vòng quay SVG */}
            <svg
              width="600"
              height="600"
              viewBox="0 0 400 400"
              className="drop-shadow-lg"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning
                  ? "transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "none",
              }}
            >
              {/* Vẽ các phần của vòng quay */}
              {prizes.map((prize, index) => {
                const angle = (index * 360) / prizes.length;
                const startAngle = angle;
                const endAngle = angle + 360 / prizes.length;

                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;

                const x1 = 200 + 150 * Math.cos(startRad);
                const y1 = 200 + 150 * Math.sin(startRad);
                const x2 = 200 + 150 * Math.cos(endRad);
                const y2 = 200 + 150 * Math.sin(endRad);

                const largeArc = 360 / prizes.length > 180 ? 1 : 0;
                const path = `M 200 200 L ${x1} ${y1} A 150 150 0 ${largeArc} 1 ${x2} ${y2} Z`;

                // Tính toán vị trí text
                const textAngle = startAngle + 360 / (prizes.length * 2);
                const textRad = (textAngle * Math.PI) / 180;
                const textX = 200 + 100 * Math.cos(textRad);
                const textY = 200 + 100 * Math.sin(textRad);

                return (
                  <g key={prize.id}>
                    <path
                      d={path}
                      fill={prize.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                    <text
                      x={textX}
                      y={textY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-sm font-bold"
                      fill="white"
                      style={{
                        transform: `rotate(${textAngle + 90}deg)`,
                        transformOrigin: `${textX}px ${textY}px`,
                      }}
                    >
                      {prize.name}
                    </text>
                  </g>
                );
              })}

              {/* Vòng tròn trung tâm */}
              <circle
                cx="200"
                cy="200"
                r="40"
                fill="white"
                stroke="#333"
                strokeWidth="2"
              />
              <text
                x="200"
                y="200"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-bold"
                fill="#333"
              >
                QUAY
              </text>
            </svg>
          </div>

          {/* Nút quay */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:cursor-not-allowed"
          >
            {isSpinning ? "⏳ Đang quay..." : "🎯 Quay Ngay"}
          </button>

          {/* Kết quả - Popup Modal */}
          {result && (
            <>
              {showConfetti && <Confetti count={80} />}
              <div className="fixed inset-0 bg-gray-500/60 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full mx-4 transform transition-all animate-popup">
                  <button
                    onClick={() => {
                      setResult(null);
                      setShowConfetti(false);
                    }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🎉</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Chúc mừng bạn!
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">Bạn đã trúng:</p>
                    <div
                      className="rounded-lg p-4 mb-6"
                      style={{
                        backgroundColor: result.color + "20",
                        borderLeft: `6px solid ${result.color}`,
                      }}
                    >
                      <p
                        className="text-4xl font-bold"
                        style={{ color: result.color }}
                      >
                        {result.name}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm mb-6">
                      ✨ Cảm ơn bạn đã tham gia!
                    </p>
                    <button
                      onClick={() => {
                        setResult(null);
                        setShowConfetti(false);
                      }}
                      className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105"
                    >
                      Quay tiếp
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-popup {
          animation: popup 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default WheelSection;
