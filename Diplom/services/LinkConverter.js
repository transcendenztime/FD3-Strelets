const convertLink = function(category) {
    switch(category) {
        case "Семена овощей":
			return "semena-ovoshchey"
        case "Семена цветов":
			return "semena-cvetov"
        case "Саженцы роз":
			return "sazhency-roz"
        case "Луковицы и клубнелуковицы цветов":
			return "lukovicy-i-klubnelukovicy-cvetov"
        case "Плодовые деревья и кустарники":
			return "plodovye-derevya-i-kustarniki"
        case "Хвойные растения":
			return "hvoynye-rasteniya"
		case "Декоративные кустарники":
			return "dekorativnye-kustarniki"
        case "Рододендроны":
			return "rododendrony"
		  
        case "semena-ovoshchey":
            return "Семена овощей"
        case "semena-cvetov":
            return "Семена цветов"
        case "sazhency-roz":
            return "Саженцы роз"
        case "lukovicy-i-klubnelukovicy-cvetov":
            return "Луковицы и клубнелуковицы цветов"
        case "plodovye-derevya-i-kustarniki":
            return "Плодовые деревья и кустарники"
        case "hvoynye-rasteniya":
            return "Хвойные растения"
		case "dekorativnye-kustarniki":
            return "Декоративные кустарники"
		case "rododendrony":
            return "Рододендроны"
			
        default:
         return false
    }
}

export {convertLink}