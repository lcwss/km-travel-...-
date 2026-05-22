const spotPositions = {
    '酒店': { x: 310, y: 140 },
    '五一广场': { x: 370, y: 160 },
    '太平老街': { x: 400, y: 180 },
    '坡子街': { x: 390, y: 200 },
    '杜甫江阁': { x: 340, y: 220 },
    '南门口': { x: 360, y: 230 },
    '湖南红星相声社': { x: 350, y: 200 },
    '橘子洲': { x: 320, y: 250 },
    '岳麓山': { x: 160, y: 130 },
    '岳麓书院': { x: 180, y: 150 },
    '爱晚亭': { x: 170, y: 135 },
    '麓山南路': { x: 200, y: 170 },
    '后湖': { x: 220, y: 190 },
    '潮宗街': { x: 280, y: 120 },
    '荷花池菜市场': { x: 260, y: 100 },
    '古开福寺': { x: 230, y: 80 },
    '湖南博物院': { x: 360, y: 110 },
    '万家丽广场': { x: 430, y: 260 },
    '扬帆夜市': { x: 450, y: 280 },
    '长沙南站': { x: 530, y: 330 }
};

const dayColors = {
    day1: { stroke: '#e74c3c', fill: '#ff6b6b', text: '#c0392b' },
    day2: { stroke: '#3498db', fill: '#74b9ff', text: '#2980b9' },
    day3: { stroke: '#27ae60', fill: '#55efc4', text: '#1e8449' }
};

const routeData = {
    day1: ['酒店', '五一广场', '太平老街', '坡子街', '杜甫江阁', '南门口', '湖南红星相声社'],
    day2: ['橘子洲', '岳麓山', '岳麓书院', '爱晚亭', '麓山南路', '后湖'],
    day3: ['潮宗街', '荷花池菜市场', '古开福寺', '湖南博物院', '万家丽广场', '扬帆夜市', '长沙南站']
};

const spotIcons = {
    '酒店': '🏨', '五一广场': '🏛️', '太平老街': '🏮', '坡子街': '🍜', '杜甫江阁': '🏯',
    '南门口': '🍢', '湖南红星相声社': '🎭', '橘子洲': '🌊', '岳麓山': '⛰️',
    '岳麓书院': '📚', '爱晚亭': '🍁', '麓山南路': '🎓', '后湖': '🏞️',
    '潮宗街': '🏮', '荷花池菜市场': '🥬', '古开福寺': '🏯', '湖南博物院': '🏺',
    '万家丽广场': '🏙️', '扬帆夜市': '🌃', '长沙南站': '🚄'
};

const routeDetails = {
    day1: [
        { from: '酒店', to: '五一广场', distance: '约1.2公里', transport: '步行', time: '约15分钟' },
        { from: '五一广场', to: '太平老街', distance: '约0.8公里', transport: '步行', time: '约10分钟' },
        { from: '太平老街', to: '坡子街', distance: '约0.3公里', transport: '步行', time: '约3分钟' },
        { from: '坡子街', to: '杜甫江阁', distance: '约0.6公里', transport: '步行', time: '约8分钟' },
        { from: '杜甫江阁', to: '南门口', distance: '约0.7公里', transport: '步行', time: '约10分钟' },
        { from: '南门口', to: '湖南红星相声社', distance: '约0.5公里', transport: '步行', time: '约7分钟' }
    ],
    day2: [
        { from: '橘子洲', to: '岳麓山', distance: '约5公里', transport: '地铁', time: '约20分钟' },
        { from: '岳麓山', to: '岳麓书院', distance: '约1公里', transport: '步行', time: '约15分钟' },
        { from: '岳麓书院', to: '爱晚亭', distance: '约0.3公里', transport: '步行', time: '约5分钟' },
        { from: '爱晚亭', to: '麓山南路', distance: '约0.2公里', transport: '步行', time: '约3分钟' },
        { from: '麓山南路', to: '后湖', distance: '约0.5公里', transport: '步行', time: '约8分钟' }
    ],
    day3: [
        { from: '潮宗街', to: '荷花池菜市场', distance: '约0.8公里', transport: '骑行', time: '约6分钟' },
        { from: '荷花池菜市场', to: '古开福寺', distance: '约2公里', transport: '地铁', time: '约10分钟' },
        { from: '古开福寺', to: '湖南博物院', distance: '约3公里', transport: '地铁', time: '约12分钟' },
        { from: '湖南博物院', to: '万家丽广场', distance: '约8公里', transport: '地铁', time: '约25分钟' },
        { from: '万家丽广场', to: '扬帆夜市', distance: '约0.6公里', transport: '步行', time: '约8分钟' },
        { from: '扬帆夜市', to: '长沙南站', distance: '约12公里', transport: '地铁', time: '约30分钟' }
    ]
};

let currentDay = 'day1';

function drawSpot(name, position, index, color, isActive) {
    const size = isActive ? 40 : 32;
    const opacity = isActive ? 1 : 0.6;
    const icon = spotIcons[name] || '📍';

    return `
        <g class="spot-group" data-spot="${name}" style="cursor: pointer; opacity: ${opacity}; transition: all 0.3s;">
            <circle cx="${position.x}" cy="${position.y}" r="${size}"
                fill="${color.fill}" stroke="${color.stroke}" stroke-width="3"
                filter="url(#shadow)"/>
            <text x="${position.x}" y="${position.y + 5}" text-anchor="middle" font-size="${isActive ? 20 : 16}">${icon}</text>
            <text x="${position.x}" y="${position.y + size + 18}" text-anchor="middle"
                font-size="11" fill="#2c3e50" font-weight="${isActive ? 'bold' : 'normal'}">${name}</text>
            ${isActive ? `<text x="${position.x + size - 5}" y="${position.y - size + 10}"
                font-size="10" fill="white" font-weight="bold"
                >${index + 1}</text>` : ''}
        </g>
    `;
}

function drawRouteLine(positions, color, day) {
    let pathD = `M ${positions[0].x},${positions[0].y}`;
    for (let i = 1; i < positions.length; i++) {
        const midX = (positions[i-1].x + positions[i].x) / 2;
        const midY = (positions[i-1].y + positions[i].y) / 2;
        pathD += ` Q ${positions[i-1].x + 30},${positions[i-1].y + 20} ${midX},${midY}`;
    }
    pathD += ` L ${positions[positions.length-1].x},${positions[positions.length-1].y}`;

    return `
        <path d="${pathD}" fill="none" stroke="${color.stroke}" stroke-width="4"
            stroke-linecap="round" stroke-dasharray="8,4" marker-end="url(#arrow${day === 'day1' ? 1 : day === 'day2' ? 2 : 3})"
            opacity="0.8"/>
    `;
}

function renderMap(day) {
    currentDay = day;
    const mapContent = document.getElementById('mapContent');
    const mapTitle = document.getElementById('mapTitle');
    let svgContent = '';

    const titleTexts = {
        day1: '📅 Day1 4月24日 - 五一广场老城烟火线',
        day2: '📅 Day2 4月25日 - 山水人文线',
        day3: '📅 Day3 4月26日 - 文化休闲线',
        all: '🗺️ 长沙3日全景路线图'
    };
    mapTitle.textContent = titleTexts[day];

    if (day === 'all') {
        ['day1', 'day2', 'day3'].forEach(d => {
            const positions = routeData[d].map(name => spotPositions[name]);
            svgContent += drawRouteLine(positions, dayColors[d], d);
        });
        routeData.day1.forEach((name, i) => {
            svgContent += drawSpot(name, spotPositions[name], i, dayColors.day1, true);
        });
        routeData.day2.forEach((name, i) => {
            svgContent += drawSpot(name, spotPositions[name], i, dayColors.day2, true);
        });
        routeData.day3.forEach((name, i) => {
            svgContent += drawSpot(name, spotPositions[name], i, dayColors.day3, true);
        });
    } else {
        const positions = routeData[day].map(name => spotPositions[name]);
        svgContent += drawRouteLine(positions, dayColors[day], day);
        routeData[day].forEach((name, i) => {
            svgContent += drawSpot(name, spotPositions[name], i, dayColors[day], true);
        });
    }

    mapContent.innerHTML = svgContent;
    updateRouteInfo(day);
}

function updateRouteInfo(day) {
    const routeList = document.getElementById('routeList');
    if (!routeList) return;

    const dayLabels = {
        day1: '4月24日（周四）',
        day2: '4月25日（周五）',
        day3: '4月26日（周六）',
        all: '全部行程'
    };
    const dayNames = {
        day1: 'Day1', day2: 'Day2', day3: 'Day3', all: '全览'
    };

    let html = `<h4>📍 ${dayNames[day]} - ${dayLabels[day]} 行程路线</h4><div class="route-list">`;

    const spots = day === 'all'
        ? [...routeData.day1, ...routeData.day2, ...routeData.day3]
        : routeData[day];

    spots.forEach((name, index) => {
        const isLast = index === spots.length - 1;
        const dayColor = day === 'all'
            ? (index < routeData.day1.length ? '#e74c3c' : index < routeData.day1.length + routeData.day2.length ? '#3498db' : '#27ae60')
            : dayColors[day].stroke;

        html += `
            <div class="route-item" style="border-left: 3px solid ${dayColor};">
                <span class="route-num" style="background: ${dayColor};">${index + 1}</span>
                <span class="route-name">${spotIcons[name]} ${name}</span>
                <span class="route-distance">${day === 'day1' ? '🚶‍♂️' : day === 'day2' ? '🚇' : '🚲'}</span>
            </div>
        `;

        if (!isLast && routeDetails[day]) {
            const detail = routeDetails[day][index];
            if (detail) {
                html += `
                    <div style="margin-left: 35px; padding: 6px; font-size: 0.8em; color: #7f8c8d; background: #f8f9fa; border-radius: 4px; margin-top: 4px; margin-bottom: 4px;">
                        🚶 ${detail.distance} | ${detail.transport} | 约${detail.time}
                    </div>
                `;
            }
        }
    });

    html += '</div>';
    routeList.innerHTML = html;
}

function showDay1Route() { renderMap('day1'); }
function showDay2Route() { renderMap('day2'); }
function showDay3Route() { renderMap('day3'); }
function showAllRoutes() { renderMap('all'); }

document.addEventListener('DOMContentLoaded', function() {
    renderMap('day1');
});
