import { css } from 'lit';

export const userDetailsStyles = css`
  .container.light-mode {
    --bg-color: #f9f9f9;
    --text-color: #1a2b42;
  }

  .container.dark-mode {
    --bg-color: #1a2b42;
    --text-color: #ffffff;
  }

  .container {
    max-width: 800px;
    margin: 12px auto;
    padding: 20px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  h2 {
    color: #1a2b42;
  }

  .section {
    margin-bottom: 20px;
  }

  .button-container {
    margin-top: 20px;
  }

  .btn-dark {
    background-color: white;
    color: #1a2b42;
  }

  .chart {
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
  }

  .chart-title {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
  }

  .chart-content {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-dark {
    color: #1a2b42;
  }

  .settings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .setting-label {
    font-weight: bold;
  }

  .setting-toggle {
    margin-left: 20px;
  }

  .friends-section {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .friends-section ul {
    list-style-type: none;
    padding: 0;
  }

  .friends-section ul li {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    color: #1a2b42;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .friends-section ul li:last-child {
    border-bottom: none;
  }

  .secondary__btn {
    background-color: #f9f9f9;
    color: #1a2b42;
    border: none;
  }

  .secondary__btn--add {
    margin-top: 10px;
  }

  .calendar {
    box-shadow: 0 0 16px #ccc;
    background-color: #f9f9f9;
    color: #ff6200;
  }
`;
