function indexedMean(A){
    var sum = 0;
    var N =  Object.keys(A).length;
    Object.keys(A).map((e) => {
        sum += +e * A[e]
    });
    return (sum / N);
}

function der(list){
    var latest = list[list.length - 1];
    var yester = list[list.length - 2];
    var yestyester = list[list.length - 3];
    var firstder = latest - yester;
    var secondder = firstder - (yester - yestyester);
    return [latest, firstder, secondder];
}

function vulnerability(Vocations, C_Mean, C_Max, H_Median, H_Max, E_Median, E_Max, Population, Housing, Birth_Rate, Death_Rate, Median_Age, Life_Expectancy, Total_Cases_Country, Max_Daily_Cases, Max_Daily_Deaths, Total_Cases, Cases, Total_Deaths_Country, Total_Deaths, Deaths, R, T){
    var V = indexedMean(Vocations) / 8;
    var C = C_Mean / C_Max;
    var H = H_Median / H_Max;
    var E = E_Median / E_Max;

    var P = Population / 80000;
    var S = indexedMean(Housing) / 4;

    var Cases_perday, Cases_firstder, Cases_secondder;
    [Cases_perday, Cases_firstder, Cases_secondder] = der(Cases);
    var Deaths_perday, Deaths_firstder, Deaths_secondder;
    [Deaths_perday, Deaths_firstder, Deaths_secondder] = der(Deaths);

    Total_Cases = Total_Cases / Total_Cases_Country;
    Total_Deaths = Total_Deaths / Total_Deaths_Country;
    [Cases_perday, Cases_firstder, Cases_secondder] = [Cases_perday / Max_Daily_Cases, Cases_firstder / Max_Daily_Cases, Cases_secondder / Max_Daily_Cases];
    [Deaths_perday, Deaths_firstder, Deaths_secondder] = [Deaths_perday / Max_Daily_Deaths, Deaths_firstder / Max_Daily_Deaths, Deaths_secondder / Max_Daily_Deaths];
    
    var B = Birth_Rate / 50;
    var D = Death_Rate / 50;
    var A = Median_Age / Life_Expectancy;
    T = T/3;

    return ((V/C/H/E) + (D * A / B) + (P / S) + (Total_Cases * Cases_perday * Cases_firstder * Cases_secondder) * (Total_Deaths * Deaths_perday * Deaths_firstder * Deaths_secondder) / R / T) / 4;
}

function logisticalFeasibility(K, t, L, Area_City, Area_Country, Max_Traffic_Speed){
    var G = Area_City / Area_Country;
    t = t / Max_Traffic_Speed;
    L = L / 2000; 
    K = K / 100;

    return (L/G + K/t) / 2;

}


function delayTolerance(X, Z, a, b, w, Q, q, A, B, Days_Since_FirstReport, Average_Crowd){
    X = X / Average_Crowd;
    Z = Z / Days_Since_FirstReport;
    a = a / Days_Since_FirstReport;
    b = b / Days_Since_FirstReport;
    w = w / 60;
    Q = Q / 1000000;
    q = q / 1200;

    return (Z*a/X/b + w*A/Q/q/B) / 2;
}