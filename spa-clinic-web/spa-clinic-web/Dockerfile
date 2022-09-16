#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["spa-clinic-web/spa-clinic-web.csproj", "spa-clinic-web/"]
RUN dotnet restore "spa-clinic-web/spa-clinic-web.csproj"
COPY . .
WORKDIR "/src/spa-clinic-web"
RUN dotnet build "spa-clinic-web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "spa-clinic-web.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "spa-clinic-web.dll"]